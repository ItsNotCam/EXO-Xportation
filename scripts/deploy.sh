echo ""

echo -n "DEPLOYING SITE ... "

ssh cyoung35@mason.gmu.edu 'rm -rf ~/public_html/exo'
ssh cyoung35@mason.gmu.edu 'mkdir -p ~/public_html/exo'

scp -r ./dist/* cyoung35@mason.gmu.edu:~/public_html/exo

if [ $? -eq 0 ]; then
	echo -e "\e[32mSUCCESS\e[0m"
else
	echo -e "\e[31mFAILED\e[0m"
fi