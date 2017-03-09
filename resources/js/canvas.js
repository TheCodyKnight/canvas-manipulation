/**
 * Created by TheCodyKnight on 3/6/2017.
 */

var img, brightness, noise, saturation, sepia;

$(document).ready(function () {
    standardImage();

    $("input[type=range]").change(changeFilter);
    $("#save").click(saveImg);
    $("#sunrise").click(filterSunrise);
    $("#vintage").click(filterVintage);
    $("#glowsun").click(filterGlowSun);
    $("#oldboot").click(filterOldBoot);
    $("#sincity").click(filterSinCity);
    $("#reset").click(reset);
    $("#standardimg").click(standardImage);
    $("#download").click(saveImg);
});

function saveImg(){
    this.href = document.getElementById("image").toDataURL();
}

function filterSunrise() {
    Caman("#image", img, function() {
        this.sunrise().render();
    })
}

function filterSinCity() {
    Caman("#image", img, function() {
        this.sinCity().render();
    })
}

function filterVintage() {
    Caman("#image", img, function() {
        this.vintage().render();
    })
}

function filterOldBoot() {
    Caman("#image", img, function() {
        this.oldBoot().render();
    })
}

function filterGlowSun() {
    Caman("#image", img, function() {
        this.glowingSun().render();
    })
}

function changeFilter() {
    if (img) {
        Caman('#image', img, function () {

            brightness = $('#brght').val();
            noise = $('#noise').val();
            saturation = $('#saturate').val();
            sepia = $('#sepia').val();

            this.revert(false);
            this.brightness(brightness);
            this.noise(noise);
            this.sepia(sepia);
            this.saturation(saturation);
            this.render();
        });
    }
}

function reset() {
    Caman("#image", img, function(){
        this.revert(false);
        this.render();
        $("#brght, #noise, #saturate, #sepia, #brghtoutput, #saturateoutput, #noiseoutput, #sepiaoutput").val(0);
    })
}

function resetFiles() {
    $("#fileselect").val("");
}

function uploadImage(files) {
    if (files[0]) {
        window.img = window.URL.createObjectURL(files[0]);
        $("#image").removeAttr("data-caman-id");

        Caman("#image", img, function () {
            this.render();
        });
    }
}

function standardImage() {
    window.img = "images/raigar.jpg";
    $("#image").removeAttr("data-caman-id");

    Caman("#image", img, function () {
        this.render();
    });

    $("#image").css("maxWidth", "70%").css("height", "auto");
}