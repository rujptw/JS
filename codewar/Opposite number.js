    function opposite(number) {
        return String(number)[0] === "-" ? Number(String(number).slice(1)) : Number("-" + number)
    }
