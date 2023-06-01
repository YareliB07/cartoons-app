import React, { useState,useEffect } from "react";
import axios from 'axios';
import KafkaService from "../services/kafka.services";

const CommentBox = ({ id }) => {

    const [comentarios, setComentarios] = useState([]);
    const [commentText, setCommentText] = useState([]);
    const uri = "https://api-mongo-service-kafka-yarelib07.cloud.okteto.net/api/comments"

    useEffect(() => {
        fetchComments();
    // eslint-disable-next-line 
    }, []);

    const fetchComments = async (r) => {
        try {
            const response = await axios.get(`${uri}/${id}`);
            const comentarios = response.data ? response.data : [];

            setComentarios(comentarios);
        } catch (error) {
            console.log('Error al obtener los comentarios:', error);
        }
    };

    const comment = (e, status) => {
        fetchComments();
        const user = localStorage.getItem('email');
        const data = {
            userId: user,
            objectId: id,
            comment: commentText
        };

        console.log(JSON.stringify(data));
        KafkaService.commentPush(data);
        e.preventDefault();
    };

    return (

        <div className="comments-section"
        onMouseOver={fetchComments}>
            <h4>Comments</h4>
            <div className="form-group">
                <label htmlFor="comment-input">Leave a comment:</label>
                <textarea
                    id="comment-input"
                    name="comment"
                    rows="4"
                    placeholder="Write your comment here..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                ></textarea>
            </div>
            <button type="button" onClick={comment}>
                Comentar
            </button>
            <div className="comments-list">
                {comentarios.map((comentario) => (
                    <div className="comment" key={comentario._id}>
                        <h5>{comentario.userId}</h5>
                        <p>{comentario.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentBox;