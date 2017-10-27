APK_DIR='app/build/outputs/apk'
cd android && ./gradlew assembleRelease
echo "Running Zipalign..."
zipalign -v -p 4 $APK_DIR/app-release-unsigned.apk $APK_DIR/app-release-unsigned-aligned.apk
echo "Running ApkSigner..."
apksigner sign --ks app/belayed.keystore --out $APK_DIR/belayed-release.apk $APK_DIR/app-release-unsigned-aligned.apk
echo "Success! Signed apk should be located at $APK_DIR/belayed-release.apk"
