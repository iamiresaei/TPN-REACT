
export function Connection() {
    return(
        <div id="connection" className="connection-bar">
            <div className="connection-txt">
                <h1><i className="fa-solid fa-cart-arrow-down fa-beat-fade"></i> دانلود کانکشن</h1>
            </div>
            <div className="connection">
            <div className="connection-card">
                    <div className="connection-img">
                        <i className="fa-brands fa-windows"></i>
                    </div>
                    <div className="connection-h1">
                        <h1>دانلود کانکشن برای</h1>
                        <span>Windows</span>
                    </div>
                    <div className="connection-i">
                        <a href="https://www.wireguard.com/install/" target="_blank">
                            <i className="fa-solid fa-download"></i>
                        </a>
                    </div>
                </div>
                <div className="connection-card">
                    <div className="connection-img">
                        <i className="fa-brands fa-android"></i>
                    </div>
                    <div className="connection-h1">
                        <h1>دانلود کانکشن برای</h1>
                        <span>Andriod</span>
                    </div>
                    <div className="connection-i">
                        <a href="https://www.wireguard.com/install/" target="_blank">
                            <i className="fa-solid fa-download"></i>
                        </a>
                    </div>
                </div>
                <div className="connection-card">
                    <div className="connection-img">
                        <i className="fa-brands fa-apple"></i>
                    </div>
                    <div className="connection-h1">
                        <h1>دانلود کانکشن برای</h1>
                        <span>iOS</span>
                    </div>
                    <div className="connection-i">
                        <a href="https://www.wireguard.com/install/" target="_blank">
                            <i className="fa-solid fa-download"></i>
                        </a>
                    </div>
                </div>
                <div className="connection-card">
                    <div className="connection-img">
                        <i className="fa-brands fa-app-store-ios"></i>
                    </div>
                    <div className="connection-h1">
                        <h1>دانلود کانکشن برای</h1>
                        <span>mac OS</span>
                    </div>
                    <div className="connection-i">
                        <a href="https://www.wireguard.com/install/" target="_blank">
                            <i className="fa-solid fa-download"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}