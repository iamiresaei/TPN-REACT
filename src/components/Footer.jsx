
export function Footer() {
    return(
        <footer className="footer-bar">
            <div className="footer">
                <div className="footer-txt">
                    <div className="footer-h1">
                        <h1>ارتباط</h1>
                    </div>
                    <div className="footer-link">
                        <div>
                            <img src="/images/social/icons8-telegram-100.png" alt="آیکون تلگرام" loading="lazy" />
                            <a href="#">تلگرام</a>
                        </div>
                        <div>
                            <img src="/images/social/icons8-instagram-100.png" alt="آیکون اینستاگرام" loading="lazy" />
                            <a href="#">اینستگرام</a>
                        </div>
                        <div>
                            <img src="/images/social/icons8-discord-100.png" alt="آیکون دیسکورد" loading="lazy" />
                            <a href="#">دیسکورد</a>
                        </div>
                    </div>
                </div>
                <div className="footer-txt">
                    <div className="footer-h1">
                        <h1>درباره</h1>
                    </div>
                    <div className="footer-link">
                        <div>
                            <img src="/images/social/icons8-about-100.png" alt="آیکون درباره ما" loading="lazy" />
                            <a href="#">درباره ما</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-img">
                <img src="/images/other/tpn1.png" alt="لوگوی TPN" loading="lazy" />
            </div>
        </footer>
    )
}