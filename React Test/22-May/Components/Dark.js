function Dark(){
    const [dark,setDark]=React.useState("Dark Mode");
    const [pdark,setpDark]=React.useState("Light Mode");
    const [style,setStyle]=React.useState({
        color:'black',
        backgroundColor:'white'
    });
    function onDark(){
        if(dark==="Dark Mode"){
            setDark("Light Mode")
            setpDark("Dark Mode")
            setStyle({
                color:'white',
                backgroundColor:'black'
            })
        }
        else if(dark==="Light Mode"){
            setDark("Dark Mode")
            setpDark("Light Mode")
            setStyle({
                color:'black',
        backgroundColor:'white'
            })
        }
    }
    return(
        <div className="Dark">
            <button onClick={onDark}>{dark}</button>
            <div className="insideDark" style={style}>
                <h1>This is {pdark}</h1>
            </div>
        </div>
    )
}