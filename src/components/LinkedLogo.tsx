import React from 'react';

interface Props {
    name: string;
    icon: keyof typeof icons;
    color: string;
    title: string;
    href: string;
}

export default (props: Props) => (
    <a
        href={props.href}
        title={`View ${props.name} at ${props.title}`}
        style={{
            marginLeft: 8,
            width: 20,
            height: 20,
            padding: 2,
            display: 'inline-block',
            background: props.color,
            fill: 'white',
        }}
    >
        {icons[props.icon]}
    </a>
);

const icons = {
    npm: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z"/>
            <path d="M10.665 10H12v2.667h-1.335V10z"/>
        </svg>
    ),
    cloudflare: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.509 16.845c.148-.507.091-.97-.155-1.315-.225-.317-.605-.5-1.062-.521l-8.659-.113a.155.155 0 01-.134-.071.194.194 0 01-.02-.155.239.239 0 01.203-.156l8.736-.113c1.034-.048 2.16-.886 2.554-1.913l.5-1.301a.28.28 0 00.013-.168 5.69 5.69 0 00-10.938-.584 2.585 2.585 0 00-1.793-.5 2.561 2.561 0 00-2.223 3.18 3.634 3.634 0 00-3.53 3.636c0 .176.013.352.034.528a.174.174 0 00.169.148h15.981a.22.22 0 00.204-.155zm2.757-5.564c-.077 0-.162 0-.24.011-.055 0-.105.042-.126.098l-.337 1.175c-.148.506-.092.97.154 1.315.226.317.605.5 1.063.52l1.843.114c.056 0 .105.026.133.07a.2.2 0 01.021.156.238.238 0 01-.204.155l-1.92.113c-1.041.049-2.16.887-2.553 1.914l-.141.358c-.028.071.02.141.098.141h6.598a.173.173 0 00.17-.125 4.81 4.81 0 00.175-1.28 4.739 4.739 0 00-4.734-4.727"/>
        </svg>
    ),
    json: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.043 23.968c.479-.004.953-.029 1.426-.094a11.804 11.804 0 003.146-.863 12.404 12.404 0 003.793-2.543 11.978 11.978 0 002.44-3.427 11.795 11.795 0 001.02-3.476c.149-1.16.135-2.346-.045-3.499a11.96 11.96 0 00-.793-2.788 11.197 11.197 0 00-.854-1.617c-1.168-1.837-2.861-3.314-4.81-4.301a12.835 12.835 0 00-2.172-.869h-.005c.119.063.24.132.345.201.12.074.239.146.351.225a8.93 8.93 0 011.559 1.33c1.063 1.145 1.797 2.548 2.218 4.041.284.982.434 1.998.495 3.017.044.743.044 1.491-.047 2.229-.149 1.27-.554 2.51-1.228 3.596a7.475 7.475 0 01-1.903 2.084c-1.244.928-2.877 1.482-4.436 1.114a3.916 3.916 0 01-.748-.258 4.692 4.692 0 01-.779-.449 6.08 6.08 0 01-1.244-1.106 6.507 6.507 0 01-1.049-1.747 7.367 7.367 0 01-.494-2.54c-.03-1.273.225-2.553.854-3.67a6.431 6.431 0 011.663-1.918c.225-.178.464-.333.704-.479l.016-.007a5.121 5.121 0 00-1.441-.12 4.962 4.962 0 00-1.228.239c-.359.12-.704.271-1.019.45a6.146 6.146 0 00-.733.495c-.211.18-.42.359-.615.555-1.123 1.153-1.768 2.682-2.022 4.256-.15.973-.15 1.961-.091 2.951.105 1.394.391 2.786.945 4.061a8.519 8.519 0 001.348 2.173 8.14 8.14 0 003.132 2.231 7.934 7.934 0 002.113.54c.074.015.149.015.209.015l-.021-.032zm-2.934-.398a4.101 4.101 0 01-.45-.228 8.5 8.5 0 01-2.038-1.534c-1.094-1.138-1.827-2.567-2.247-4.081a15.186 15.186 0 01-.495-3.172 12.142 12.142 0 01.046-2.082c.135-1.257.495-2.501 1.124-3.58A6.889 6.889 0 016.832 6.84a6.23 6.23 0 011.633-.9 5.363 5.363 0 013.522-.045c.029 0 .029 0 .045.03.015.015.045.015.06.03.045.016.104.045.165.074.239.12.479.271.704.42a6.294 6.294 0 012.097 2.502c.42.914.615 1.934.631 2.938.014 1.079-.18 2.157-.645 3.146a6.421 6.421 0 01-2.638 2.832c.09.03.18.045.271.075.225.044.449.074.688.074 1.468.045 2.892-.659 3.94-1.647.195-.18.375-.375.54-.585.225-.27.435-.539.614-.823.239-.375.435-.75.614-1.154a8.112 8.112 0 00.509-1.664c.196-1.004.211-2.022.149-3.026-.135-2.022-.673-4.045-1.842-5.724a9.055 9.055 0 00-.555-.719 9.868 9.868 0 00-1.063-1.034 8.477 8.477 0 00-1.363-.915 9.927 9.927 0 00-1.692-.598l-.3-.06c-.209-.03-.42-.044-.634-.06a8.453 8.453 0 00-1.015.016c-.704.045-1.412.16-2.112.337-3.356.866-6.292 3.205-7.855 6.308A11.835 11.835 0 00.238 9.8a11.811 11.811 0 00-.104 3.775c.12 1.02.374 2.023.778 2.977.227.57.511 1.124.825 1.648 1.094 1.783 2.683 3.236 4.51 4.24.688.391 1.408.69 2.157.945.226.074.45.149.689.209l.016-.024z"/>
        </svg>
    ),

    buffer: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M23.784 18.24c.287.142.287.267 0 .374l-11.357 5.223a.893.893 0 01-.854 0L.213 18.614c-.284-.107-.284-.232 0-.375l2.722-1.23c.284-.14.57-.14.852 0l7.787 3.573c.285.14.57.14.854 0l7.787-3.574a.917.917 0 01.852 0l2.717 1.23zm0-6.454c.287.143.287.285 0 .426L12.427 17.44c-.287.104-.57.104-.854 0L.213 12.21c-.284-.143-.284-.284 0-.426l2.722-1.227a.894.894 0 01.852 0l7.787 3.57c.285.144.57.144.854 0l7.787-3.57a.894.894 0 01.852 0l2.717 1.226zM.214 5.76c-.285-.143-.285-.267 0-.375L11.574.16c.283-.14.57-.14.852 0l11.358 5.23c.287.107.287.232 0 .375l-11.357 5.223a.904.904 0 01-.854 0L.213 5.76z"/>
        </svg>
    ),

    graphql: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M14.051 2.751l4.935 2.85a2.144 2.144 0 013.409.4 2.146 2.146 0 01-1.354 3.151v5.699a2.132 2.132 0 011.348 3.15 2.143 2.143 0 01-3.453.353l-4.905 2.832a2.14 2.14 0 11-4.171.678c0-.205.029-.41.088-.609l-4.936-2.847a2.14 2.14 0 11-2.052-3.559l.001-5.699A2.141 2.141 0 011.604 6a2.143 2.143 0 013.407-.405l4.938-2.85A2.138 2.138 0 0112 0a2.137 2.137 0 012.051 2.751zm-.515.877a.793.793 0 01-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146a2.135 2.135 0 01-1.558-2.588l.019-.072-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852a2.136 2.136 0 01-1.461 2.645l-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838a1.748 1.748 0 01-.038-.142H5.542l-.021.083 4.939 2.852a2.126 2.126 0 011.54-.653c.627 0 1.19.269 1.583.698z"/>
        </svg>
    ),
    readthedocs: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2.759 24l.664-.144c.207-.044.412-.085.619-.126.318-.062.637-.123.955-.182.24-.046.48-.085.721-.129l.055-.015c.25-.044.498-.09.747-.12l1.214-.179V-.001h-.042c-.63.004-1.256.016-1.884.036-.689.018-1.394.06-2.084.105-.299.021-.6.046-.899.07H2.78v23.784L2.759 24zM8.911.015v22.942c.861-.1 1.72-.182 2.582-.246a61.326 61.326 0 016.373-.151c1.128.034 2.253.099 3.374.192V1.503a57.493 57.493 0 00-3.028-.607 61.884 61.884 0 00-5.947-.731A58.503 58.503 0 008.913.016h-.002zm10.763 14.797l-.046-.004-.561-.061a61.145 61.145 0 00-4.207-.291 65.346 65.346 0 00-4.223.016h-.044c-.045 0-.091 0-.135-.016a.593.593 0 01-.267-.149.581.581 0 01-.156-.495c.008-.061.029-.105.054-.166.027-.044.063-.104.104-.134a.557.557 0 01.143-.104.89.89 0 01.18-.061h.09c.195 0 .391-.016.57-.016a65.862 65.862 0 014.169.03 58.27 58.27 0 014.288.33l.151.015c.044.016.089.016.135.03a.66.66 0 01.255.181c.044.044.074.104.105.164.029.061.044.12.044.18a.564.564 0 01-.164.45c-.046.046-.091.075-.135.105-.047.03-.105.044-.166.06-.03.016-.045.016-.089.016h-.047l-.048-.08zm.035-2.711c-.044 0-.044 0-.09-.006l-.555-.071a49.549 49.549 0 00-4.198-.359 56.304 56.304 0 00-4.214-.06l-.046-.016c-.045-.015-.09-.015-.135-.029a.57.57 0 01-.254-.166c-.03-.045-.076-.104-.09-.148a.591.591 0 01.014-.525c.031-.061.061-.105.105-.15s.09-.09.15-.104c.061-.03.119-.06.18-.06l.09-.016.585-.015a62.984 62.984 0 014.153.09c1.439.075 2.865.21 4.289.39l.149.016.091.014a.517.517 0 01.27.166c.12.119.18.284.165.449a.306.306 0 01-.045.165c-.029.06-.061.104-.09.15-.03.044-.074.075-.136.12-.044.029-.104.045-.164.061l-.091.014H19.8l-.091.09zm0-2.711c-.044 0-.044 0-.09-.006l-.555-.08a61.256 61.256 0 00-4.198-.428 60.24 60.24 0 00-4.214-.129h-.046l-.09-.016a.732.732 0 01-.164-.068.629.629 0 01-.285-.438c0-.061 0-.12.016-.18a.612.612 0 01.059-.17.643.643 0 01.121-.144.592.592 0 01.42-.165h.569c1.439.009 2.879.064 4.304.172 1.395.105 2.774.26 4.153.457l.15.021c.046.007.061.007.09.019.06.02.12.046.165.08a.36.36 0 01.135.123c.031.048.061.101.09.158a.588.588 0 01-.404.775c-.029.012-.046.012-.091.014l-.044.005h-.091zm0-2.712c-.044 0-.044 0-.09-.007l-.555-.09a49.325 49.325 0 00-4.198-.496 66.254 66.254 0 00-4.214-.209h-.046l-.105-.014a.634.634 0 01-.305-.195c-.036-.045-.068-.104-.094-.149a.901.901 0 01-.044-.181.625.625 0 01.181-.494.59.59 0 01.279-.15c.045-.015.09-.015.135-.015.189 0 .38.005.57.008 1.437.034 2.871.113 4.304.246 1.387.119 2.77.3 4.145.524l.135.016c.04 0 .052 0 .09.014.062.016.112.046.165.076.046.029.09.074.125.119a.632.632 0 01.105.465.743.743 0 01-.061.166.516.516 0 01-.12.135.6.6 0 01-.271.149h-.135l.004.082zm-15.67-.509a.638.638 0 01-.271-.063.606.606 0 01-.329-.505c0-.057.015-.111.03-.165a.456.456 0 01.09-.19.663.663 0 01.164-.162.727.727 0 01.241-.092l.48-.044a71.35 71.35 0 011.949-.144h.06a.543.543 0 01.271.071.59.59 0 01.314.519c0 .055-.015.109-.029.161a.473.473 0 01-.091.189.552.552 0 01-.165.165.674.674 0 01-.24.09c-.104.015-.209.015-.314.03-.136.015-.286.015-.436.031l-1.168.088-.285.031a.809.809 0 01-.196.015l-.075-.025zm15.655-2.201l-.091-.01-.554-.1a62.77 62.77 0 00-4.214-.564 64.085 64.085 0 00-4.214-.271h-.045l-.09-.018a.638.638 0 01-.165-.071.74.74 0 01-.135-.121c-.12-.138-.165-.33-.12-.506.016-.061.045-.12.074-.18.031-.061.076-.105.121-.15a.627.627 0 01.285-.15c.045-.015.089-.015.135-.015l.584.015c1.395.061 2.774.15 4.154.301 1.439.148 2.864.359 4.288.6l.15.014c.046 0 .061 0 .09.016a.58.58 0 01.165.074.605.605 0 01.239.421c.016.06 0 .12-.015.181a.313.313 0 01-.059.164 1.03 1.03 0 01-.105.135.506.506 0 01-.286.135l-.086.014h-.046l-.06.086zM4.022 3.199a.588.588 0 01-.332-1.076.6.6 0 01.26-.099c.158-.014.314-.014.473-.029.65-.045 1.301-.075 1.949-.105h.048c.091.016.181.03.256.075.179.105.3.315.3.524a.572.572 0 01-.03.166.863.863 0 01-.104.195.46.46 0 01-.182.15.506.506 0 01-.255.075c-.104.014-.21.014-.33.014l-.449.031c-.405.029-.795.045-1.186.074l-.3.016c-.075.015-.134.015-.194.015l.076-.026z"/>
        </svg>
    ),
    libraries: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 0 20 20">
            <path d="M2.8 5.2c0-.5 0-.8-.1-1 0-.2-.1-.3-.3-.3-.2 0-.5-.1-1-.1s-.8 0-1 .1l-.3.3c0 .2-.1.5-.1 1v7L2.8 10V5.2zM.1 14v1.5c0 .5 0 .8.1 1 0 .2.1.3.3.3.2 0 .5.1 1 .1s.8 0 1-.1c.2 0 .3-.1.3-.3 0-.2.1-.5.1-1v-3.6L.1 14zm4.5-3.6v4.9c0 .5 0 .8.1 1 0 .2.1.3.3.3.2 0 .5.1 1 .1s.8 0 1-.1c.2 0 .3-.1.3-.3 0-.2.1-.5.1-1V8.2l-2.8 2.2zm2.7-5.1v-.1c0-.5 0-.8-.1-1 0-.1-.1-.2-.2-.3-.2 0-.5-.1-1-.1s-.8 0-1 .1c-.2.1-.3.2-.4.3 0 .2-.1.5-.1 1v3.5l2.8-2.2V5.3zm4.6 5.1v4.9c0 .5 0 .8-.1 1 0 .2-.1.3-.3.3-.2 0-.5.1-1 .1s-.8 0-1-.1c-.2 0-.3-.1-.3-.3 0-.2-.1-.5-.1-1V8.2l2.8 2.2zM9.1 5.3v-.1c0-.5 0-.8.1-1 0-.2.1-.3.3-.3.2 0 .5-.1 1-.1s.8 0 1 .1c.2 0 .3.1.3.3 0 .2.1.5.1 1v3.5L9.1 6.5V5.3z"/>
        </svg>
    ),
    jsdelivr: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M24.4 5l-3.7 13.2v13.4L24.4 45l3.9-13.4V18.2L24.4 5z"/>
            <path d="M24.4 5L6 11.7l2.6 24.5L24.4 45m0 0l16-8.8 2.9-24.6L24.4 5"/>
        </svg>
    ),
};
