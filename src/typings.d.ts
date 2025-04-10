declare module '*.jpg';
declare module '*.png';
declare module '*.svg';


declare const __IS_DEV__: boolean;



declare module '*.sass' {
    const content: Record<string, string>;
    export default content;
}