import React, {useEffect} from 'react';
const View = ({setName}) => {
    useEffect(() => {
        setName("ثبت دیدگاه")
    }, [])


    return (
        <>
            <div style={{paddingBottom:"30px" ,display: "flex",flexDirection:"column", justifyContent: "space-between", height: "100vh"}}>
                <div style={{backgroundColor:"#F2F7F9"}}>
                    <input style={{color:"black",fontWeight:"300" ,height: "135px", width: "335px",textAlign:"end", outline: "none" ,border:"none" ,backgroundColor:"#F2F7F9"}} type="text"
                           placeholder="متن توضیحات خود را اینجا بنویسید"/>
                    <span>500/0</span>
                </div>
                <button style={{marginTop:"10px",backgroundColor:"#0157F0" , width:"335px" ,height:"48px", color:"white" , border:"none",outline:"none",borderRadius:"5px"}}>
                    تایید و ثبت
                </button>
            </div>
        </>
    );
};

export default View;