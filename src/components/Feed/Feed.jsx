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

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshhot) =>
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

  

    // setPosts([...posts])
  };

  return (
    <div className={classes.feed}>
      <div className={classes.inputContainer}>
        <div className={classes.input}>
          <CreateIcon />
          <form action="" onSubmit={sendPost}>
            <input type="text" />
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
      {posts &&
        posts.map((post) => (
          <Post
            name={post.name}
            description={post.description}
            message={post.message}
          />
        ))}

      <Post
        name="Josh Haughton"
        description="This is a test"
        message="Ok great, this worked!"
      />
    </div>
  );
};

export default Feed;
