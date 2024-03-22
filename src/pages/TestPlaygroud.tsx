import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';


function TestPlayground() {
    const [post, setPost] = useState('');

    useEffect(() => {
        let req = new Request(`../md/test.md`);
            
        fetch(req)
            .then(res => res.text())
            .then(res => setPost(res))
            .catch(err => console.log(err));
    });

    return (
        <ReactMarkdown>
            {post}
        </ReactMarkdown>
    );
}
export default TestPlayground;