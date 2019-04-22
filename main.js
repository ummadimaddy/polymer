// import { PolymerElement, html } from '@polymer/polymer';
import { PolymerElement, html } from 'https://unpkg.com/@polymer/polymer@3.0.0-pre.13/polymer-element.js';
// import {togglePlayFunction} from './play-pause';
var toggleValue = true;
var toggleMuteValue = true;


class customElement extends PolymerElement {

    static get properties() {
        return { sourc: String }
    }


    togglePlayFunction() {
        var myButton = this.shadowRoot.getElementById("myButton");

        var myVideo = this.shadowRoot.getElementById("myVideo");

        toggleValue = !toggleValue;
        if (toggleValue == true) {
            myButton.innerHTML = "<img src='./assets/play.svg' height='50px' width='50px'>";
            myVideo.pause();
        }
        else {
            myButton.innerHTML = "<img src='./assets/pause.svg'  height='50px' width='50px'>";
            myVideo.play();
        }
    }
    toggleMuteFunction() {

        var myVideo = this.shadowRoot.getElementById("myVideo");
        toggleMuteValue = !toggleMuteValue;
        var myButton1 = this.shadowRoot.getElementById("myButton1");
        if (toggleMuteValue) {
            myButton1.innerHTML = "<img src='./assets/mute.png' height='50px' width='50px'>";
            myVideo.muted = false;
        }
        else {
            myButton1.innerHTML = "<img src='./assets/unmute.png'  height='50px' width='50px'>";
            myVideo.muted = true;
        }
    }

    seekBar() {
        const video = this.shadowRoot.getElementById('myVideo')
        const seekbar = this.shadowRoot.getElementById('seekbar')

        video.addEventListener('timeupdate', () => {
            seekbar.value = video.currentTime / video.duration * seekbar.max
        })

        seekbar.addEventListener('change', () => {
            video.currentTime = video.duration * seekbar.value / seekbar.max
        })
    }

    static get template() {
        return html`
        <video id="myVideo" src="[[sourc]]" height="500px" width="400px"></video>
        <div>
        <button on-click="togglePlayFunction" id="myButton"><img src='./assets/play.svg'  height='50px' width='50px'></button>
        <input id="seekbar" type="range" min="0" max="100" on-click="seekBar"></input>
        <button id="myButton1" on-click="toggleMuteFunction"><img src='./assets/mute.png'  height='50px' width='50px'></button>
        </div>`;
    }
    // <iframe id="myVideo" width="560" height="315" src="https://www.youtube.com/embed/-iFq6IcAxBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}

customElements.define('custom-element', customElement);