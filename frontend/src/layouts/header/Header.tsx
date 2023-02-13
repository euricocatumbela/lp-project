import { ACCOUNT, LOGIN } from "@/data/HeaderData"
import Link from "next/link"
import { Logo } from "../../icons/logo"
import { Wrapper, WrapperLinks } from "./Header.styles"
type Props = {}

const Header: React.FC<Props> = () => {
    return (
        <Wrapper>
            <WrapperLinks>
                <Link href="/">
                    <Logo />
                </Link>
                <Link href={LOGIN}>Login</Link>
                <Link href={LOGIN}>Orders</Link>
                <Link href={ACCOUNT}>My Account</Link>
            </WrapperLinks>
        </Wrapper>
    )
}

export default Header