
const $template = document.createElement('template');
$template.innerHTML = `
    <form class="login-form">
        <h2 class="title">Sign In</h2>
        <input-register class="email" placeholder="Your email" type ="email" error="" text = "Email" style = "magrin-bottom:1000px"></input-register>
        <br>
        <input-register class="password" placeholder="Your password" type ="password" error="" text = "Passwork"></input-register>
        <button class="login-in">LOGIN</button>
    </form>
`;

export default class LoginAccount extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$loginAccount = this.querySelector('.login-form');
        this.$email = this.querySelector('.email');
        this.$password = this.querySelector('.password');
        this.$text = this.querySelector('.text')
    }

    connectedCallback() {
        this.$loginAccount.onsubmit = (event) => {
            event.preventDefault();
            console.log("register form submitted");
            
            let isPassed = true;
            this.$email.validate((value) => {
                return value != '';
            }, "Invalid email") & 
            this.$password.validate((value) => {
                return value != '';
            }, "Invalid password");
            if(isPassed == true){
                console.log("Passs connected");
            }
        }
    }
}

window.customElements.define('login-form', LoginAccount);
