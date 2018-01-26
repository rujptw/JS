    function spEng(sentence) {
        var reg = /english/gi;
        if (reg.test(sentence) === true) {
            return true;
        } else {
            return false;
        }
    }
