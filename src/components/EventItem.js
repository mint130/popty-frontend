
const EventItem = ({id, name}) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="119" height="148" viewBox="0 0 119 148" fill="none">
            <g filter="url(#filter0_d_1283_12838)">
                <path d="M1 56.1672C1 47.2303 8.7289 39.9856 18.263 39.9856H99.9564C109.49 39.9856 117.219 47.2303 117.219 56.1672V129.819C117.219 138.755 109.49 146 99.9564 146H18.263C8.72891 146 1 138.755 1 129.819V56.1672Z" fill="#CECECE"/>
                <path d="M117.219 54.4696C117.219 84.5524 91.2028 108.939 59.1097 108.939C27.0166 108.939 1 84.5524 1 54.4696C1 24.3869 27.0166 0 59.1097 0C91.2028 0 117.219 24.3869 117.219 54.4696Z" fill="#CECECE"/>
            </g>
            <defs>
                <filter id="filter0_d_1283_12838" x="0" y="0" width="118.219" height="148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="0.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1283_12838"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1283_12838" result="shape"/>
                </filter>
            </defs>
            <text text-anchor="middle" alignment-baseline="middle" transform="translate(100, 100)" fill="black">
                {name}
            </text>
        </svg>



    );
}
export default EventItem;