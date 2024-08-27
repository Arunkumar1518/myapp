export default function Navbar(){
    // const data=[24,65,876,4];
    // return(
    //     <>
    //     <h1>i am nav</h1>
    //     {data.map((num,i)=><li key={i}>{num}</li>)}

    //     </>
    // )
    const data=[
        {id:1,username:"arun",age:22},
        {id:1,username:"boo",age:23},
        {id:1,username:"asref",age:24},
    ]
    
    return(
        <>
        <h1>navbar component</h1>
        {data.map((a)=><h1 key={a.id}>{a.username}</h1>)}

        </>
    )
}