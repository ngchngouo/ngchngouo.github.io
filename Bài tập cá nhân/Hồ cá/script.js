function toggleMusic() {

            let music = document.getElementById("music");
            let btn = document.getElementById("musicBtn");

            if (music.paused) {

                music.play().then(() => {
                    btn.innerHTML = "🔇 Tắt nhạc";
                }).catch(() => {
                    alert("Không thể phát nhạc. Hãy kiểm tra file music.mp4!");
                });

            } else {

                music.pause();
                btn.innerHTML = "🎵 Bật nhạc";

            }
        }