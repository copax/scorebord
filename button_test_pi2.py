import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

GPIO.setup(5, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(6, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(13, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(19, GPIO.IN, pull_up_down = GPIO.PUD_UP)

try:
    while True:
		if(GPIO.input(5) == 0):
			print("PB 1 pressed")

		if(GPIO.input(6) == 0):
			print("PB 2 pressed")

		if(GPIO.input(13) == 0):
			print("PB 3 pressed")

		if(GPIO.input(19) == 0):
			print("PB 4 pressed")

except KeyboardInterrupt:
    GPIO.cleanup()
