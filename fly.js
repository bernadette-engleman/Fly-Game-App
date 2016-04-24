@charset "utf-8";
/* CSS Document */

html {
    position: relative;
    min-height: 95%;
}

body {
    display: block;
    background: url(background.jpg) center center / cover no-repeat fixed;
    padding: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.navbar-nav > li > a, .navbar-brand {
    padding-top:5px !important; padding-bottom:0 !important;
    height: 32px;
}

.navbar {
    min-height:32px !important;
}

section {
    padding-bottom: 0;
    margin: 0 0 10px;
}

a {
    font-size: 1.25em !important;
    color: #404040 !important;
    background-color: #ffffff !important;
    margin: 5px !important;
    padding: 8px  !important;
    border-radius: 7px;
    border: 1px solid #404040;
}

a:hover {
    color: #fff !important;
    background-color: #404040 !important;
}

.titleFont {
    font-size: 2.2em;
}

.messageFont {
    font-size: 1.2em;
    padding-left: 15px;
    padding-right: 15px;
}

#hideEnd {
    margin-top: 20px;
    display: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

#flyarea {
    cursor: url(swatter2.png), crosshair;
}

#startButton {
    padding: 50px 0;
    cursor:pointer !important;
}

#box {
    position: relative;
    margin: 0 auto -150px;
    width: 300px;
    height: 300px;
    top: -140px;
    bottom: 0;
    background-color: transparent;
    overflow: hidden;
    visibility: hidden;
    cursor: url(swatter2.png), crosshair;
    padding-bottom: 0;
}

#fly {
    position: absolute;
    display: block;
    -webkit-animation: moveX 3.05s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
    -moz-animation: moveX 3.05s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
    -o-animation: moveX 3.05s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
    animation: moveX 3.05s linear 0s infinite alternate, moveY 3.4s linear 0s infinite alternate;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@-webkit-keyframes moveX {
    from { left: 0; } to { left: 270px; }
}
@-moz-keyframes moveX {
    from { left: 0; } to { left: 270px; }
}
@-o-keyframes moveX {
    from { left: 0; } to { left: 270px; }
}
@keyframes moveX {
    from { left: 0; } to { left: 270px; }
}
@-webkit-keyframes moveY {
    from { top: 0; } to { top: 270px; }
}
@-moz-keyframes moveY {
    from { top: 0; } to { top: 270px; }
}
@-o-keyframes moveY {
    from { top: 0; } to { top: 270px; }
}
@keyframes moveY {
    from { top: 0; } to { top: 270px; }
}

#over {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    z-index: 10;
    top: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    cursor:pointer !important;
}

footer {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10px;
    width: 100%;
}

@media screen and (max-width: 550px) {
    .titleFont {
        font-size: 2em;
    }
    .messageFont {
        font-size: 1em !important;
    }
    #box {
        top: -135px;
    }
}

@media screen and (max-width: 380px) {
    a {
        font-size: 1em !important;
    }
    .titleFont {
        font-size: 1.8em;
    }
    #box {
        top: -140px;
    }
}
