import RPi.GPIO as GPIO
from time import sleep
import urllib2
import urllib
import json
import sys

# Constants for Button pins
PUSH_BUTTON_1 = 4
PUSH_BUTTON_2 = 17
PUSH_BUTTON_3 = 27
PUSH_BUTTON_4 = 10
PUSH_BUTTON_5 = 11
PUSH_BUTTON_6 = 6
PUSH_BUTTON_7 = 14
PUSH_BUTTON_8 = 18
PUSH_BUTTON_9 = 24
PUSH_BUTTON_10 = 8
PUSH_BUTTON_11 = 12
PUSH_BUTTON_12 = 20

MASTER_BUTTON = 19
MASTER_LED = 26

# Constants for LED pins
LED_1 = 2
LED_2 = 3
LED_3 = 22
LED_4 = 9
LED_5 = 5
LED_6 = 13
LED_7 = 15
LED_8 = 23
LED_9 = 25
LED_10 = 7
LED_11 = 16
LED_12 = 21

inputs_locked = False
led_activated = 0
button_pressed = "none"


GPIO.setmode(GPIO.BCM)

# Setup Inputs
GPIO.setup(PUSH_BUTTON_1, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_2, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_3, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_4, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_5, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_6, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_7, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_8, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_9, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_10, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_11, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_12, GPIO.IN, pull_up_down = GPIO.PUD_UP)

GPIO.setup(MASTER_BUTTON, GPIO.IN, pull_up_down = GPIO.PUD_UP)


# Setup Outputs 
GPIO.setup(LED_1, GPIO.OUT, initial=0)
GPIO.setup(LED_2, GPIO.OUT, initial=0)
GPIO.setup(LED_3, GPIO.OUT, initial=0)
GPIO.setup(LED_4, GPIO.OUT, initial=0)
GPIO.setup(LED_5, GPIO.OUT, initial=0)
GPIO.setup(LED_6, GPIO.OUT, initial=0)
GPIO.setup(LED_7, GPIO.OUT, initial=0)
GPIO.setup(LED_8, GPIO.OUT, initial=0)
GPIO.setup(LED_9, GPIO.OUT, initial=0)
GPIO.setup(LED_10, GPIO.OUT, initial=0)
GPIO.setup(LED_11, GPIO.OUT, initial=0)
GPIO.setup(LED_12, GPIO.OUT, initial=0)


HOSTNAME="localhost"

def postToUrl(button_pressed):
     url = 'http://' + HOSTNAME + '/api/index.php/setteam/' + button_pressed
     data = urllib.urlencode({'blah' : ''})
     response = urllib2.urlopen(url, data).read()
     print json.dumps(response)

def postReset():
    url = 'http://' + HOSTNAME + '/api/index.php/resetteam'
    data = urllib.urlencode({'blah' : ''})
    response = urllib2.urlopen(url, data).read()
    print json.dumps(response)

try:
    while True:
        if(inputs_locked == False):
            if(GPIO.input(PUSH_BUTTON_1) == GPIO.LOW):
                print("PB 1 pressed")
                inputs_locked = True
                GPIO.output(LED_1, GPIO.HIGH)
                led_activated = LED_1
                postToUrl("BTN01")
                continue
            elif(GPIO.input(PUSH_BUTTON_2) == GPIO.LOW):
                print("PB 2 pressed")
                inputs_locked = True
                GPIO.output(LED_2, GPIO.HIGH)
                led_activated = LED_2
                postToUrl("BTN02")
                continue
            elif(GPIO.input(PUSH_BUTTON_3) == GPIO.LOW):
                print("PB 3 pressed")
                inputs_locked = True
                GPIO.output(LED_3, GPIO.HIGH)
                led_activated = LED_3
                postToUrl("BTN03")
                continue
            elif(GPIO.input(PUSH_BUTTON_4) == GPIO.LOW):
                print("PB 4 pressed")
                inputs_locked = True
                GPIO.output(LED_4, GPIO.HIGH)
                led_activated = LED_4
                postToUrl("BTN04")
                continue
            elif(GPIO.input(PUSH_BUTTON_5) == GPIO.LOW):
                print("PB 5 pressed")
                inputs_locked = True
                GPIO.output(LED_5, GPIO.HIGH)
                led_activated = LED_5
                postToUrl("BTN05")
                continue
            elif(GPIO.input(PUSH_BUTTON_6) == GPIO.LOW):
                print("PB 6 pressed")
                inputs_locked = True
                GPIO.output(LED_6, GPIO.HIGH)
                led_activated = LED_6
                postToUrl("BTN06")
                continue
            elif(GPIO.input(PUSH_BUTTON_7) == GPIO.LOW):
                print("PB 7 pressed")
                inputs_locked = True
                GPIO.output(LED_7, GPIO.HIGH)
                led_activated = LED_7
                postToUrl("BTN07")
                continue
            elif(GPIO.input(PUSH_BUTTON_8) == GPIO.LOW):
                print("PB 8 pressed")
                inputs_locked = True
                GPIO.output(LED_8, GPIO.HIGH)
                led_activated = LED_8
                postToUrl("BTN08")
                continue
            elif(GPIO.input(PUSH_BUTTON_9) == GPIO.LOW):
                print("PB 9 pressed")
                inputs_locked = True
                GPIO.output(LED_9, GPIO.HIGH)
                led_activated = LED_9
                postToUrl("BTN09")
                continue
            elif(GPIO.input(PUSH_BUTTON_10) == GPIO.LOW):
                print("PB 10 pressed")
                inputs_locked = True
                GPIO.output(LED_10, GPIO.HIGH)
                led_activated = LED_10
                postToUrl("BTN10")
                continue
            elif(GPIO.input(PUSH_BUTTON_11) == GPIO.LOW):
                print("PB 11 pressed")
                inputs_locked = True
                GPIO.output(LED_11, GPIO.HIGH)
                led_activated = LED_11
                postToUrl("BTN11")
                continue
            elif(GPIO.input(PUSH_BUTTON_12) == GPIO.LOW):
                print("PB 12 pressed")
                inputs_locked = True
                GPIO.output(LED_12, GPIO.HIGH)
                led_activated = LED_12
                postToUrl("BTN12")
                continue
        else:
            if(GPIO.input(MASTER_BUTTON) == GPIO.LOW):
                print("Master Button pressed")
                inputs_locked = False
                button_pressed = "resetteam"
                GPIO.output(led_activated, GPIO.LOW)
		postReset()
		continue

except KeyboardInterrupt:
    	#print(sys.exc_info()[0])
	GPIO.cleanup()
