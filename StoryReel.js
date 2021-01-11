import React from 'react'
import "./StoryReel.css";
import Story from "./Story";


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://github.com/piyush626/photos/blob/main/tree-736885__340.jpg?raw=true"
                profileSrc="https://github.com/piyush626/photos/blob/main/emo1.jpg?raw=true"
                title="Pratyush Agarwal"
            />
            <Story
                image="https://github.com/piyush626/photos/blob/main/nature2.jpg?raw=true"
                profileSrc="https://github.com/piyush626/photos/blob/main/emo2.jpg?raw=true"
                title="Pranjali Singhal"
            />
            <Story
                image="https://github.com/piyush626/photos/blob/main/nature3.jpg?raw=true"
                profileSrc="https://github.com/piyush626/photos/blob/main/emo3.jpg?raw=true"
                title="Vaibhav Mittal"
            />
            <Story
                image="https://github.com/piyush626/photos/blob/main/nature4.jpg?raw=true"
                profileSrc="https://github.com/piyush626/photos/blob/main/emo4.jpg?raw=true"
                title="Yash Raj"
            />
            <Story
                image="https://github.com/piyush626/photos/blob/main/nature5.jpg?raw=true"
                profileSrc="https://github.com/piyush626/photos/blob/main/emo5.png?raw=true"
                title="Megha Thakur"
            />
        </div>
    )
}

export default StoryReel
