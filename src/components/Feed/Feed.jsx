import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import classes from "./Feed.module.css";
import InputOption from "./InputOption/InputOption";
import Post from "./Post/Post";
import { db } from "../../firebase";
import firebase from 'firebase/compat/app';
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import FlipMove from 'react-flip-move';

const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        }),
      ),
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoURL: user.photoURL || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  };

  return (
    <div className={classes.feed}>
      <div className={classes.inputContainer}>
        <div className={classes.input}>
          <CreateIcon />
          <form action="" onSubmit={sendPost}>
            <input type="text" onChange={e => setInput(e.target.value)} value={input}/>
            <button>Send</button>
          </form>
        </div>
        <div className={classes.inputOptions}>
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#FD9294"
          />
        </div>
      </div>
      <FlipMove>
        {posts &&
          posts.map(({ id, data: { name, description, message, photoURL } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoURL={photoURL}
            />
          ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
