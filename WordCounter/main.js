function count_words(s) {
    s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-
    s = s.replace(/[!@#$%^&*(),.?":{}|<>-]/g, "");
    s = s.replace(/\n{1,}/gm, " ");
    s = s.replace(/[.]{3,}/g, "");
    s = s.replace(/[—]{1,}/g, "");
    s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
    s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
    return s.split(' ').filter(function (str) {
        return str != "";
    }).length;
}

function count_paragraphs(text) {
    text = text.replace(/\n$/gm, ''); //.split(/\n/).length;
    text = text.replace(/(^\s*)/gi, ""); // delete start \n
    return text.split(/\n/).length;
}

function count_sentences(text) {
    return text.trim().split(/[\.\?\!]\s/).length;
}

function count_character_space(s) {
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/\n /, "\n");
    return s.length;
}

function count_character(text) {
    return text.replace(/\s+/g, "").length;
}

function insert_data() {
    document.querySelector("#total-word-strong").innerText = word;
    document.querySelector("#total-characters-strong").innerText = character_space;
    document.querySelector("#total-char-without-spacestrong").innerText = character;
    document.querySelector("#sentences").innerText = sentences;
    document.querySelector("#paragraphs").innerText = paragraphs;
}

function analytic_words(text) {
    word = count_words(text);
    character_space = count_character_space(text);
    character = count_character(text);
    sentences = count_sentences(text);
    paragraphs = 0;

    if (word) {
        paragraphs = count_paragraphs(text);
    }
    if (!word) {
        sentences = 0;
    }

    insert_data();
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('upload-file').addEventListener('change', function () {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById("input").value = this.result;
            cal_text_data_for_show();
        }
        fr.readAsText(this.files[0]);
    });
    document.querySelector("#input").addEventListener("keyup", () => {
        cal_text_delay_for_show();
    })
});

function cal_text_data_for_show() {
    diff_words = 0;
    text = document.querySelector("#input").value
    analytic_words(text);
}

var timeoutdata;

function cal_text_delay_for_show() {
    clearTimeout(timeoutdata);
    timeoutdata = setTimeout(function () {
        cal_text_data_for_show();
    }, 300);
}
