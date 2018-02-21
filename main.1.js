var show = true;

for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
        if (show) {
            document.write("#");
        } else {
            document.write("&nbsp;");
        }

        show = !show;
    }

    document.write("<br />");
}