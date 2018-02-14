for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
        if ((j + i) % 2 === 0) {
            document.write("#");
        } else {
            document.write("&nbsp;");
        }
    }

    document.write("<br />");
}