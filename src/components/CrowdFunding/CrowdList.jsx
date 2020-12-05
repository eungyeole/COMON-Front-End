import { useEffect, useState } from "react"
import { useHistory } from "react-router";
import { request } from "../../modules/axios/axios";
import CrowdCard from "./CrowdCard"
import * as S from "./styles"
const Data=
[
    {
        keywords: "게임",
        name : "(주)스타트업최고",
        title: "게임 개발해요 진짜 짱짱 재미남 ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ",
        now : "9999999999",
        Dday: "21",
        src: "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128068407_448848412945434_1614495640795421449_n.png?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_eui2=AeGd3P3TsVE0B_an0rrzMZnlmpKLnNyl1muakouc3KXWa263UeMHLRQBjDcwlpyGo0O0u7DS_z3GaCStZBMn08Hy&_nc_ohc=ZL05YxtHoL0AX_lp5Oz&_nc_ht=scontent-ssn1-1.xx&oh=c16eb282591acc1dfcf119b481819304&oe=5FEEB1F6"
    },
    {
        keywords: "놀기",
        name : "(주)노는게최고",
        title: "놀아요 진짜 짱짱 재미남 ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ",
        now : "9999999999",
        Dday: "19",
        src: "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128068407_448848412945434_1614495640795421449_n.png?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_eui2=AeGd3P3TsVE0B_an0rrzMZnlmpKLnNyl1muakouc3KXWa263UeMHLRQBjDcwlpyGo0O0u7DS_z3GaCStZBMn08Hy&_nc_ohc=ZL05YxtHoL0AX_lp5Oz&_nc_ht=scontent-ssn1-1.xx&oh=c16eb282591acc1dfcf119b481819304&oe=5FEEB1F6"
    },
    {
        keywords: "게임",
        name : "(주)스타트업최고",
        title: "게임 개발해요 진짜 짱짱 재미남 ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ",
        now : "9999999999",
        Dday: "21",
        src: "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128068407_448848412945434_1614495640795421449_n.png?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_eui2=AeGd3P3TsVE0B_an0rrzMZnlmpKLnNyl1muakouc3KXWa263UeMHLRQBjDcwlpyGo0O0u7DS_z3GaCStZBMn08Hy&_nc_ohc=ZL05YxtHoL0AX_lp5Oz&_nc_ht=scontent-ssn1-1.xx&oh=c16eb282591acc1dfcf119b481819304&oe=5FEEB1F6"
    },
    {
        keywords: "놀기",
        name : "(주)노는게최고",
        title: "놀아요 진짜 짱짱 재미남 ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ",
        now : "9999999999",
        Dday: "19",
        src: "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128068407_448848412945434_1614495640795421449_n.png?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_eui2=AeGd3P3TsVE0B_an0rrzMZnlmpKLnNyl1muakouc3KXWa263UeMHLRQBjDcwlpyGo0O0u7DS_z3GaCStZBMn08Hy&_nc_ohc=ZL05YxtHoL0AX_lp5Oz&_nc_ht=scontent-ssn1-1.xx&oh=c16eb282591acc1dfcf119b481819304&oe=5FEEB1F6"
    },
    {
        keywords: "게임",
        name : "(주)스타트업최고",
        title: "게임 개발해요 진짜 짱짱 재미남 ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ",
        now : "9999999999",
        Dday: "21",
        src: "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128068407_448848412945434_1614495640795421449_n.png?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_eui2=AeGd3P3TsVE0B_an0rrzMZnlmpKLnNyl1muakouc3KXWa263UeMHLRQBjDcwlpyGo0O0u7DS_z3GaCStZBMn08Hy&_nc_ohc=ZL05YxtHoL0AX_lp5Oz&_nc_ht=scontent-ssn1-1.xx&oh=c16eb282591acc1dfcf119b481819304&oe=5FEEB1F6"
    },
    {
        keywords: "놀기",
        name : "(주)노는게최고",
        title: "놀아요 진짜 짱짱 재미남 ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ ㄹㅇ",
        now : "9999999999",
        Dday: "19",
        src: "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128068407_448848412945434_1614495640795421449_n.png?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_eui2=AeGd3P3TsVE0B_an0rrzMZnlmpKLnNyl1muakouc3KXWa263UeMHLRQBjDcwlpyGo0O0u7DS_z3GaCStZBMn08Hy&_nc_ohc=ZL05YxtHoL0AX_lp5Oz&_nc_ht=scontent-ssn1-1.xx&oh=c16eb282591acc1dfcf119b481819304&oe=5FEEB1F6"
    }
]
function CrowdList(props){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const history=useHistory();
    useEffect(()=>{
        const url=props.type=="notice" ? "/apply":"/crowd"
        setLoading(true);
        request("get", url, "", "")
        .then((res)=>{
            console.log(res);
            setData(res);
        })
        setLoading(false);
    },[])
    if(loading) return(<div>로딩중</div>);
    if(!data) return("데이터없음");
    return(
        <S.CrowdList>
            {
                data.map((val, i)=>{
                    return(<CrowdCard type={props.type} data={val} index={i}></CrowdCard>);
                })
            }  
        </S.CrowdList>
    );
}
export default CrowdList;