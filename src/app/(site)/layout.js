import Menu from "@/components/nav/nav";

export default function siteLayout({ children }) {
    return <div>
        <span>[site layout]</span>
        <Menu />
        {children}
    </div>
}   