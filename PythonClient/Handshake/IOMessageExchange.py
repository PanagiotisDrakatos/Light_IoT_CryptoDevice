from Ciphers.Assymmetric import Fingerprint
from Ciphers.Symmetric import HmacAlgoProvider
from Configuration import Format
from Configuration.JsonObject import JsonObject
from IOSocket.IOCallback import Callback


class MessageExchange(Callback):
    def __init__(self, Sock, KeysHandle, CipherToUse):
        super(Callback, self).__init__()
        self.__Socket = Sock
        self.__StrToSend = ''
        self.__KeyHandle = KeysHandle
        self.__CipherToUse = CipherToUse

    def _Callback__SendDHEncryptedMessage(self, Message, Chipher):
        self.__ObjToSend = JsonObject()
        encrypted = Chipher.Encrypt(Message, self.__KeyHandle._KeyManager__loadRemoteCipherKey())
        self.__ObjToSend.EncryptedMessage = encrypted
        self.__ObjToSend.HmacHash = HmacAlgoProvider.__Signature__(self.__ObjToSend.EncryptedMessage,
                                                                   self.__KeyHandle._KeyManager__loadRemoteIntegrityKey(),
                                                                   self.__CipherToUse.HashAlgorithm)
        self.__StrToSend = Format.JsonObjToStr(self.__ObjToSend)
        self.__Socket.__Send__(self.__StrToSend, 256)

    def _Callback__ReceiveDHEncryptedMessage(self, Chipher):
        StrToread = self.__Socket.__Receive__()
        self.__ObjToRead = JsonObject(StrToread)

        if Fingerprint.__verification__(self.__ObjToRead.EncryptedMessage,
                                        self.__KeyHandle._KeyManager__loadRemoteServerPublicKey(),
                                        self.__ObjToRead.FingerPrint):
            if HmacAlgoProvider.__HmacVerify__(self.__ObjToRead.EncryptedMessage,
                                               self.__KeyHandle._KeyManager__loadRemoteIntegrityKey(),
                                               self.__ObjToRead.HmacHash,
                                               self.__CipherToUse.HashAlgorithm):
                return Chipher.Decrypt(self.__ObjToRead.EncryptedMessage,
                                       self.__KeyHandle._KeyManager__loadRemoteCipherKey())
            else:
                raise Exception("Integrity of SymmetricKey canot verified")
        else:
            raise Exception("Integrity of RSA canot verified")
