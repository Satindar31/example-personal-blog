export default function NewPost() {
    return (
        <div>
            TODO
        </div>
    );
}



// 'use client'
// import { useState } from "react";
// import ReactQuill from "react-quill";
// import 'react-quill/dist/quill.snow.css';
// import Script from "next/script";

// export default function NewPost() {
//     const [passcode, setPasscode] = useState('')
//     const [value, setValue] = useState('');
//     const [redirect, setRedirect] = useState(false)
//     const moduless = {
//         toolbar: [

//             ['bold', 'italic', 'underline', 'strike'],     
//             ['blockquote', 'code-block'],
          
//             [{ 'header': 1 }, { 'header': 2 }],          
//             [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//             [{ 'script': 'sub'}, { 'script': 'super' }],  
//             [{ 'indent': '-1'}, { 'indent': '+1' }],  
//             [{ 'direction': 'rtl' }],                        
          
//             [{ 'size': ['small', false, 'large', 'huge'] }], 
//             [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
//             [{ 'color': [] }, { 'background': [] }], 
//             [{ 'font': [] }],
//             [{ 'align': [] }],
          
//             ['clean']   
//         ]
//     }

//     async function createPost(ev: any){
//         ev.preventDefault()
//         const response = await fetch('/api/create-post', {
//             method: 'POST',
//             body: JSON.stringify({value, passcode})
//         })

//         if(response.ok) setRedirect(true)
//     }
//     if(redirect) {
//         return <Script id='redirect'>{`window.location.href="/"`}</Script>
//     }
//     return (
//         <div className="prose prose-zinc lg:prose-xl flex flex-col justify-center items-center">
//             <form onSubmit={createPost}>
//             <ReactQuill theme="snow" modules={moduless} placeholder={"Start writing your epic blog post..."} className="text-black" value={value} onChange={setValue}/>
//             <input placeholder="0000" value={passcode} onChange={(ev) => setPasscode(ev.target.value)} type="number" />
//             <button className="border-zinc-200 border-opacity-30 rounded-md border-2">Submit</button>
//             </form>
//         </div>
//     )
// }