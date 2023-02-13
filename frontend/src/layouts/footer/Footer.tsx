import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
type Props = {}

const Footer: React.FC<Props> = () => {
    return (
        <div className="footer-container">
        <p>2023 LP diversos All rights reserverd</p>
        <p className="icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </p>
      </div>
    )
    
}

export default Footer