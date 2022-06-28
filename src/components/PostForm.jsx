import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    const[post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();    
                
        const newPost = {
            ...post, id: Date.now()
        }
        if(post.title !== '' && post.body !== ''){
        create(newPost)
        setPost({title: '', body: ''})
        }        
        };
       
    

    return (
        <form>
        {/*Управляемый компонент*/}
        <MyInput 
        value = {post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Название поста">
        </MyInput>

        <MyInput 
        value = {post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Название поста">
        </MyInput>  
       
       
       
        {/* Хук useRef() Неуправляемый/Неконтроллируемый компонент
        <MyInput
        ref={bodyInputRef} 
        type="text" 
        placeholder="Описание поста"></MyInput> */}


        
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    );
};

export default PostForm;