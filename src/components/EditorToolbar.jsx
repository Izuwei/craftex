import React, { useRef, useState, useCallback } from "react";
import { Toolbar, Button, IconButton, makeStyles, Popper, Grow, Paper, MenuItem, MenuList, ClickAwayListener, InputBase, Tooltip } from "@material-ui/core";
import { Description, FiberNew, Done, Publish, GetApp, Undo, Redo, BugReport, Clear, ClearAll, ListAlt, WrapText, Search, Translate, TextFields, SkipNext, SkipPrevious, AllInclusive, ViewDay } from "@material-ui/icons";
import { fade } from "@material-ui/core/styles";
import ShellDialog from "./ShellDialog";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "rgb(35, 35, 35)",
        //marginTop: "3px",
        minHeight: "33px",
        height: "33px",
    },
    btn: {
        height: "33px",
        padding: "0px 10px 0px 10px",
        margin: "0px",
    },
    toolbarIcon: {
        marginRight: "6px",
    },
    popmenu: {
        zIndex: "9999",
    },
    input: {
        display: "none",
    },

    activeButton: {
        backgroundColor: "#039be5 !important",
    },
    searchBox: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
    searchBtns: {
        paddingLeft: "5px",
        paddingRight: "5px",
        borderRadius: "4px",
    },
    searchBtnIcons: {
        height: "10px",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 'auto',
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    searchIcon: {
        paddingLeft: "5px",
        paddingRight: "5px",
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 5),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

const EditorToolbar = React.memo(({ setInput, result, undo, redo, clearAllBreakpoints, showAlert, wrap, toggleWrap, find, findAll, inspectMode, toggleInspectMode, pipeline, setPipelineActivity, clearPipeline }) => {
    const classes = useStyles();

    const [openFile, setOpenFile] = useState(false);
    const [openEditor, setOpenEditor] = useState(false);
    const [openPipeline, setOpenPipeline] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openShellDialog, setOpenShellDialog] = useState(false);

    const [searchExpression, setSearchExpression] = useState("");   // TODO: Predelat jednotlivy casti na mensi komponenty (asi)
    const [searchRegExp, setSearchRegExp] = useState(false);
    const [searchCaseSensitive, setSearchCaseSensitive] = useState(false);

    const fileRef = React.createRef();
    
    const fileButtonRef = useRef(null);
    const editorButtonRef = useRef(null);
    const pipelineButtonRef = useRef(null);
    const searchButtonRef = useRef(null);

    const expandFile = useCallback(() => {
        setOpenFile(prev => !prev);
        setOpenEditor(false);
        setOpenPipeline(false);
        setOpenSearch(false);
    }, [setOpenFile, setOpenEditor, setOpenPipeline, setOpenSearch]);

    const expandEditor = useCallback(() => {
        setOpenFile(false);
        setOpenEditor(prev => !prev);
        setOpenPipeline(false);
        setOpenSearch(false);
    }, [setOpenFile, setOpenEditor, setOpenPipeline, setOpenSearch]);

    const expandInspect = useCallback(() => {
        setOpenFile(false);
        setOpenEditor(false);
        setOpenPipeline(prev => !prev);
        setOpenSearch(false);
    }, [setOpenFile, setOpenEditor, setOpenPipeline, setOpenSearch]);

    const expandSearch = useCallback(() => {
        setOpenFile(false);
        setOpenEditor(false);
        setOpenPipeline(false);
        setOpenSearch(prev => !prev);
    }, [setOpenFile, setOpenEditor, setOpenPipeline, setOpenSearch]);

    const handleClose = useCallback((event) => {
        // Otevreni dalsiho selectu
        if ((fileButtonRef.current && fileButtonRef.current.contains(event.target)) || 
            (editorButtonRef.current && editorButtonRef.current.contains(event.target)) ||
            (pipelineButtonRef.current && pipelineButtonRef.current.contains(event.target)) ||
            (searchButtonRef.current && searchButtonRef.current.contains(event.target))) {
            return;
        }
        
        setOpenFile(false);
        setOpenEditor(false);
        setOpenPipeline(false);
        setOpenSearch(false);
    }, [setOpenFile, setOpenEditor, setOpenPipeline, setOpenSearch]);

    const handleListKeyDown = useCallback((event) => {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpenFile(false);
          setOpenEditor(false);
          setOpenPipeline(false);
        }
    }, [setOpenFile, setOpenEditor, setOpenPipeline]);

    const loadFile = useCallback(async(e) => {
        e.preventDefault();

        const reader = new FileReader();

        reader.onload = async (e) => { 
          setInput(e.target.result);
        };
        reader.readAsText(e.target.files[0]);
        showAlert("info", "Info: File imported.");
    }, [setInput, showAlert]);

    const downloadResult = useCallback(async() => {
        const element = document.createElement("a");
        const file = new Blob([result], {type: 'text/plain'});

        element.href = URL.createObjectURL(file);
        element.download = "result.txt";
        document.body.appendChild(element);
        element.click();
    }, [result]);

    return (
        <Toolbar className={classes.root}>
            <Button 
                className={classes.btn}
                ref={fileButtonRef}
                onClick={expandFile}
            >
                <Description fontSize="small" className={classes.toolbarIcon} />
                File
            </Button>
            <Popper className={classes.popmenu} open={openFile} anchorEl={fileButtonRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={openFile} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <input
                            accept="text/plain"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            ref={fileRef}
                            onChange={e => `${loadFile(e)} ${handleClose(e)}`}
                        />
                        <label htmlFor="contained-button-file">
                            <MenuItem>
                                <Publish fontSize="small" className={classes.toolbarIcon}/>
                                Import
                            </MenuItem>
                        </label>
                        <MenuItem onClick={downloadResult}>
                            <GetApp fontSize="small" className={classes.toolbarIcon} />
                            Download
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
            )}
            </Popper>

            <Button 
                className={classes.btn}
                ref={editorButtonRef}
                onClick={expandEditor}
            >
                <ListAlt fontSize="small" className={classes.toolbarIcon} />
                Editor
            </Button>
            <Popper className={classes.popmenu} open={openEditor} anchorEl={editorButtonRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList autoFocusItem={openEditor} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={e => `${undo(e)} ${handleClose(e)}`}>
                            <Undo fontSize="small" className={classes.toolbarIcon} />
                            Undo
                        </MenuItem>
                        <MenuItem onClick={e => `${redo(e)} ${handleClose(e)}`}>
                            <Redo fontSize="small" className={classes.toolbarIcon} />
                            Redo
                        </MenuItem>
                        <MenuItem onClick={e => `${toggleWrap(e)} ${handleClose(e)}`}>
                            <WrapText fontSize="small" className={classes.toolbarIcon} />
                            { wrap ? "Disable wrap" : "Enable wrap" }
                        </MenuItem>
                        <MenuItem onClick={e => `${toggleInspectMode(e)} ${handleClose(e)}`}>
                            <ViewDay fontSize="small" className={classes.toolbarIcon} />
                            { inspectMode ? "Disable inspector" : "Enable inspector" }
                        </MenuItem>
                        <MenuItem onClick={e => `${clearAllBreakpoints(e)} ${handleClose(e)}`}>
                            <Clear fontSize="small" className={classes.toolbarIcon} />
                            Remove all breakpoints
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
            )}
            </Popper>

            <Button 
                className={classes.btn}
                ref={pipelineButtonRef}
                onClick={expandInspect}
            >
                <BugReport fontSize="small" className={classes.toolbarIcon} />
                Pipeline
            </Button>
            <Popper className={classes.popmenu} open={openPipeline} anchorEl={pipelineButtonRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={openPipeline} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <MenuItem onClick={e => `${setPipelineActivity(true)} ${handleClose(e)}`}>
                            <Done fontSize="small" className={classes.toolbarIcon} />
                            Enable all tools
                        </MenuItem>
                        <MenuItem onClick={e => `${setPipelineActivity(false)} ${handleClose(e)}`}>
                            <Clear fontSize="small" className={classes.toolbarIcon} />
                            Disable all tools
                        </MenuItem>
                        <MenuItem onClick={e => `${clearPipeline()} ${handleClose(e)}`}>
                            <ClearAll fontSize="small" className={classes.toolbarIcon} />
                            Clear pipeline
                        </MenuItem>
                        <MenuItem onClick={e => `${setOpenShellDialog(true)} ${handleClose(e)}`}>
                            <FiberNew fontSize="small" className={classes.toolbarIcon} />
                            Create shell script
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
            )}
            </Popper>

            <Button 
                className={classes.btn}
                ref={searchButtonRef}
                onClick={expandSearch}
            >
                <Search fontSize="small" className={classes.toolbarIcon} />
                Search
            </Button>
            <Popper className={classes.popmenu} open={openSearch} anchorEl={searchButtonRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <div className={classes.searchBox}>
                                <Tooltip title="RegExp">
                                <IconButton size="small" className={`${classes.searchBtns} ${searchRegExp && classes.activeButton }`}
                                    onClick={() => setSearchRegExp(prev => !prev)}
                                >
                                    <Translate />
                                </IconButton>
                                </Tooltip>
                                <Tooltip title="Case sensitive">
                                <IconButton size="small" className={`${classes.searchBtns} ${searchCaseSensitive && classes.activeButton }`}
                                    onClick={() => setSearchCaseSensitive(prev => !prev)}
                                >
                                    <TextFields />
                                </IconButton>
                                </Tooltip>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <Search />
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={event => setSearchExpression(event.target.value)}
                                        value={searchExpression}
                                    />
                                    <Tooltip title="Remove">
                                    <IconButton size="small" style={{marginRight: "5px"}} 
                                        onClick={() => setSearchExpression("")}
                                    >
                                        <Clear />
                                    </IconButton>
                                    </Tooltip>
                                </div>
                                <Tooltip title="Previous">
                                <IconButton size="small" className={classes.searchBtns} 
                                    onClick={() => find(searchExpression, { backwards: true, wrap: true, caseSensitive: searchCaseSensitive, wholeWord: false, regExp: searchRegExp })}
                                >
                                    <SkipPrevious />
                                </IconButton>
                                </Tooltip>
                                <Tooltip title="Next">
                                <IconButton size="small" className={classes.searchBtns}
                                     onClick={() => find(searchExpression, { backwards: false, wrap: true, caseSensitive: searchCaseSensitive, wholeWord: false, regExp: searchRegExp })}
                                >
                                    <SkipNext />
                                </IconButton>
                                </Tooltip>
                                <Tooltip title="All">
                                <IconButton size="small" className={classes.searchBtns} 
                                     onClick={() => findAll(searchExpression, { backwards: false, wrap: true, caseSensitive: searchCaseSensitive, wholeWord: false, regExp: searchRegExp })}
                                >
                                    <AllInclusive />
                                </IconButton>
                                </Tooltip>
                            </div>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
            </Popper>
            {openShellDialog &&
                <ShellDialog 
                    open={openShellDialog}
                    close={() => setOpenShellDialog(false)}
                    pipeline={pipeline}
                />
            }
        </ Toolbar>
    );
});

export default EditorToolbar;