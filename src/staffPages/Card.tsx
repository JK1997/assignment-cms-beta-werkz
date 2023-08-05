interface CardProps {
    title: string;
    imageurl: string;
    body: string;
}

export function Card({ title, imageurl, body }: CardProps) {
    return (
        <div className="card">
            <div className="card-container">
                <div className="image-container">
                    <img src={imageurl} alt="" />
                </div>
                <div className="card-content">
                    <div className="title-container">
                        <h3>{title}</h3>
                    </div>
                    <div className="body-container">
                        <p>{body}</p>
                    </div>
                </div>
                <div className="btn">
                    <button>
                        <a href="#">View More</a>
                    </button>
                </div>
            </div>
        </div>
    );
}
