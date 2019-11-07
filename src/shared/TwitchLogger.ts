const wndw = (window as any);
const LogToTwitch: (...Args: any[]) => void = wndw.Twitch ? wndw.Twitch.ext.rig.log : console.log;

export const TwitchConfig: any = wndw.Twitch ? wndw.Twitch.configuration : null;

export default LogToTwitch;

export class TwitchUser {
    id: string = '';
    login: string = '';
    display_name: string = '';
    type: string = '';
    broadcaster_type: string = '';
    description: string = '';
    profile_image_url: string = '';
    offline_image_url: string = '';
    view_count: number = 0;

}
