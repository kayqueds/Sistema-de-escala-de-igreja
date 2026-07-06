// aqui chamará os sons dos alertas
const listSound = [
    "/sounds/sucesso.mp3",
    "/sounds/erro.mp3",
    "/sounds/confirmar.mp3",
];

function Sound() {
    const playSound = async (soundFile) => {
        const audio = new Audio(soundFile);
        audio.volume = 0.8;
        await audio.play();
    }
    return { playSound, listSound };
}
export default Sound;