
const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll('.contact-form-text').forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },
    mouseOver(x) {
        x.style.color = "red";
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [{
            letter: "a",
            sound: "ch(a)t"
        },
        {
            letter: "z",
            sound: "(z)éro"
        },
        {
            letter: "s",
            sound: " (s)apin"
        },
        {
            letter: "v",
            sound: " (v)ire"
        },
        {
            letter: "f",
            sound: " (f)ée"
        },
        {
            letter: "ʒ",
            sound: " ré(g)ir"
        },
        {
            letter: "∫",
            sound: " (ch)ien"
        },
        {
            letter: "ʁ",
            sound: "(r)oue"
        },
        {
            letter: "x",
            sound: "(kh)an"
        },
        {
            letter: "d",
            sound: "(d)îner"
        },
        {
            letter: "t",
            sound: "(t)hon"
        },
        {
            letter: "b",
            sound: "(b)ière"
        },
        {
            letter: "backspace",
            sound: "ø"
        },
        {
            letter: "n",
            sound: "(n)ez"
        },
        {
            letter: "m",
            sound: "(m)eme"
        },
        {
            letter: "ɲ",
            sound: "(gn)ôle"
        },
        {
            letter: "ŋ",
            sound: "swi(ng)"
        },
        {
            letter: "k",
            sound: "(c)arte"
        },
        {
            letter: "ɥ",
            sound: "y(u)an"
        },
        {
            letter: "w",
            sound: "l(ou)p"
        },
        {
            letter: "l",
            sound: "(l)ion"
        },
        {
            letter: "j",
            sound: "foui(ll)e"
        },
        {
            letter: "y",
            sound: "p(u)re"
        },
        {
            letter: "i",
            sound: "g(î)te"
        },
        {
            letter: "p",
            sound: "(p)ère"
        },
        {
            letter: "u",
            sound: " s(aou)l"
        },
        {
            letter: "œ",
            sound: "c(eu)ille"
        },
        {
            letter: "ē",
            sound: " b(a)con"
        },
        {
            letter: "ō",
            sound: "p(ô)le"
        },
        {
            letter: "ø",
            sound: "f(eu)"
        },
        {
            letter: "e",
            sound: "n(ez)"
        },
        {
            letter: "o",
            sound: "(o)r"
        },
        {
            letter: "ɛ",
            sound: "t(ai)e"
        },
        {
            letter: "ɔ",
            sound: "m(o)rt"
        },

        {
            letter: "ɛ̃",
            sound: "p(ain)"
        },
        {
            letter: "g",
            sound: "(gu)êpe"
        },
        {
            letter: "ã",
            sound: " l(am)pe"
        },
        {
            letter: "ɔ̃",
            sound: "(omb)re"
        },

        {
            letter: "done",
            sound: "ø"
        }




        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };


        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key.letter) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");

            keyElement.classList.add("keyboard__key");

            switch (key.letter) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("backspace");


                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:

                    $("#tagscloud").text(key.sound);
                    
                 
                    
                    keyElement.textContent = key.letter ;
                    var textNode = document.createTextNode("\r\n" +key.sound);
                    var span = document.createElement('span');
                    span.style.fontSize = "0.7rem";
                    span.style.color = "#ad443d";
                    span.appendChild(textNode);
                    keyElement.appendChild(span);
                

                   // keyElement.setAttribute("id", key.letter);
                    keyElement.setAttribute("id", key.sound);
                   
                    
                    keyElement.setAttribute("style", "white-space: pre;");
                    






                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.letter.toUpperCase() : key.letter.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);


            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }

        });
        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});
$(".contact-form .contact-form-text ").keydown(false);
jQuery(function () {
    jQuery(".contact-form-text").attr('readonly', 'readonly');
});



















