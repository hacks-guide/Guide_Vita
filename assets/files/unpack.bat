@echo off
pkg2zip -x *.pkg
del /Q app\PCSG90096\resource\movie\*
del /Q app\PCSG90096\resource\image\bg\*
del /Q app\PCSG90096\resource\image\ev\*
del /Q app\PCSG90096\resource\image\icon\*
del /Q app\PCSG90096\resource\image\stitle\*
del /Q app\PCSG90096\resource\image\tachie\*
del /Q app\PCSG90096\resource\sound\bgm\*
del /Q app\PCSG90096\resource\sound\se\*
del /Q app\PCSG90096\resource\sound\sec\*
del /Q app\PCSG90096\resource\sound\voice\*
del /Q app\PCSG90096\resource\text\01\*
robocopy app\PCSG90096\ app\ux0_temp_game_PCSG90096_app_PCSG90096 /E /MOV
copy app\ux0_temp_game_PCSG90096_app_PCSG90096\sce_sys\package\temp.bin license\ux0_temp_game_PCSG90096_license_app_PCSG90096\6488b73b912a753a492e2714e9b38bc7.rif