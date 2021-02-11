"use strict";

var element = /*#__PURE__*/React.createElement("div", {
  class: "main"
}, /*#__PURE__*/React.createElement("div", {
  class: "name"
}, /*#__PURE__*/React.createElement("h1", null, "Chinmay Joshi")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
  class: "profile"
}, /*#__PURE__*/React.createElement("img", {
  class: "pic",
  src: "./profile.jpg"
})), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
  class: "paragraph"
}, "I am a 23 year-old, fairly recent college graduate from UC San Diego, I graduated in Spring 2020. Currently I am working as a Business Intelligence Analyst at Kyocera International. I'm taking this course in order to learn Web Application Development skills. My prior background includes several computer science courses throughout my undergraduate time, at the end of which I received a minor in Computer Scince. I am completely new to Web Development, but I see that the possibilities with modern Information Technologies are limitless, and that is something that excites me."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
  class: "button",
  onClick: function onClick(e) {
    e.preventDefault();
    window.location.href = 'https://github.com/ckjoshi1997';
  }
}, "View my GitHub Repo"));
ReactDOM.render(element, document.getElementById('contents'));