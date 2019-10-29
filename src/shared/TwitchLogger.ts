const wndw = (window as any);
const LogToTwitch: (...Args: any[]) => void = wndw.Twitch ? wndw.Twitch.ext.rig.log : console.log;

export default LogToTwitch;
