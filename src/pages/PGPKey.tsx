function PGPKey() {
let key = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: User-ID:	ConfuzzedCat <confuzzedcat@gmail.com>
Comment: Valid from:	14/11/2022 09.29
Comment: Valid until:	14/11/2024 12.00
Comment: Type:	255-bit EdDSA (secret key available)
Comment: Usage:	Signing, Encryption, Certifying User-IDs, SSH Authentication
Comment: Fingerprint:	63F7963C21BA301525ECB693F429706F6B5B88AE


mDMEY3H8WhYJKwYBBAHaRw8BAQdAMe993OhH+ZkLO/2PazlIm9t+pZU2UJRQ5faR
ficI46C0JUNvbmZ1enplZENhdCA8Y29uZnV6emVkY2F0QGdtYWlsLmNvbT6ImQQT
FgoAQRYhBGP3ljwhujAVJey2k/QpcG9rW4iuBQJjcfxaAhsjBQkDw9vWBQsJCAcC
AiICBhUKCQgLAgQWAgMBAh4HAheAAAoJEPQpcG9rW4iug+0BAKPSCldjR5SqhQ6J
anSFIby9BH8o/+UZFSBUDXteiYEtAQCuidWIpd+iqA5yaFhc98w8kDU4FcxS1H+M
WneYypYSCbg4BGNx/FoSCisGAQQBl1UBBQEBB0AL6+o+5cPOiPUigAIxbCQlbtUs
oPwvRfbC1rnppI81MgMBCAeIfgQYFgoAJhYhBGP3ljwhujAVJey2k/QpcG9rW4iu
BQJjcfxaAhsMBQkDw9vWAAoJEPQpcG9rW4iur1oA+gIkrXFXWpm918xGjL+LEtPC
IvsGwiQa1UD1D1NLn6bpAP9Ef/nsUbaJsY/luAFVdqlKHgH5kYKXuIwlSU/gDXqy
DA==
=0miH
-----END PGP PUBLIC KEY BLOCK-----`;

const ClickHandler = () =>{
    navigator.clipboard.writeText(key);
    alert("Key copied!")
}
    return(
        <div className="FullWidth CenterChildren">
            <pre className="RoutesLinks" onClick={ClickHandler}>
                {key}
            </pre>
        </div>
    );    
}

export default PGPKey;