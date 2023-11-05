import "../CSS/indexStyle.css";
import Footer from "../Components/footer";
import NavIndex from "../Components/navIndex";
import BodyIndex from "../Components/bodyIndex";
import Contact from "../Components/contact";

function Index() {
    return (
        <>
            <div className="h-100 bg-info mw-100">
                <NavIndex></NavIndex>
                <main>
                    <BodyIndex></BodyIndex>
                    <Contact></Contact>
                </main>
                <Footer></Footer>
            </div>
        </>
    )
}
export default Index;