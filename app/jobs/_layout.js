import { Slot } from "expo-router";
import "../../global.css";
import Header from "../../src/components/Header";

export default function Layout() {
    return (
        <>
            <Header />
            <Slot />
        </>
    );
}
