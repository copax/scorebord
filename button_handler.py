import RPi.GPIO as GPIO
from time import sleep
import urllib2

# Constants for Button pins
PUSH_BUTTON_1 = 2
PUSH_BUTTON_2 = 4
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
LED_1 = 3
LED_2 = 17
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
GPIO.setup(LED_1, GPIO.OUT)
GPIO.setup(LED_2, GPIO.OUT)
GPIO.setup(LED_3, GPIO.OUT)
GPIO.setup(LED_4, GPIO.OUT)
GPIO.setup(LED_5, GPIO.OUT)
GPIO.setup(LED_6, GPIO.OUT)
GPIO.setup(LED_7, GPIO.OUT)
GPIO.setup(LED_8, GPIO.OUT)
GPIO.setup(LED_9, GPIO.OUT)
GPIO.setup(LED_10, GPIO.OUT)
GPIO.setup(LED_11, GPIO.OUT)
GPIO.setup(LED_12, GPIO.OUT)

GPIO.output(LED_1, GPIO.LOW)
GPIO.output(LED_2, GPIO.LOW)
GPIO.output(LED_3, GPIO.LOW)
GPIO.output(LED_4, GPIO.LOW)
GPIO.output(LED_5, GPIO.LOW)
GPIO.output(LED_6, GPIO.LOW)
GPIO.output(LED_7, GPIO.LOW)
GPIO.output(LED_8, GPIO.LOW)
GPIO.output(LED_9, GPIO.LOW)
GPIO.output(LED_10, GPIO.LOW)
GPIO.output(LED_11, GPIO.LOW)
GPIO.output(LED_12, GPIO.LOW)

try:
    while True:
        if(inputs_locked == False):
            if(GPIO.input(PUSH_BUTTON_1) == GPIO.LOW):
                print("PB 1 pressed")
                inputs_locked = True
                GPIO.output(LED_1, GPIO.HIGH)
                led_activated = LED_1
                button_pressed = "BTN01"
                continue
            elif(GPIO.input(PUSH_BUTTON_2) == GPIO.LOW):
                print("PB 2 pressed")
                inputs_locked = True
                GPIO.output(LED_2, GPIO.HIGH)
                led_activated = LED_2
                button_pressed = "BTN02"
                continue
            elif(GPIO.input(PUSH_BUTTON_3) == GPIO.LOW):
                print("PB 3 pressed")
                inputs_locked = True
                GPIO.output(LED_3, GPIO.HIGH)
                led_activated = LED_3
                button_pressed = "BTN03"
                continue
            elif(GPIO.input(PUSH_BUTTON_4) == GPIO.LOW):
                print("PB 4 pressed")
                inputs_locked = True
                GPIO.output(LED_4, GPIO.HIGH)
                led_activated = LED_4
                button_pressed = "BTN04"
                continue
            elif(GPIO.input(PUSH_BUTTON_5) == GPIO.LOW):
                print("PB 5 pressed")
                inputs_locked = True
                GPIO.output(LED_5, GPIO.HIGH)
                led_activated = LED_5
                button_pressed = "BTN05"
                continue
            elif(GPIO.input(PUSH_BUTTON_6) == GPIO.LOW):
                print("PB 6 pressed")
                inputs_locked = True
                GPIO.output(LED_6, GPIO.HIGH)
                led_activated = LED_6
                button_pressed = "BTN06"
                continue
            elif(GPIO.input(PUSH_BUTTON_7) == GPIO.LOW):
                print("PB 7 pressed")
                inputs_locked = True
                GPIO.output(LED_7, GPIO.HIGH)
                led_activated = LED_7
                button_pressed = "BTN07"
                continue
            elif(GPIO.input(PUSH_BUTTON_8) == GPIO.LOW):
                print("PB 8 pressed")
                inputs_locked = True
                GPIO.output(LED_8, GPIO.HIGH)
                led_activated = LED_8
                button_pressed = "BTN08"
                continue
            elif(GPIO.input(PUSH_BUTTON_9) == GPIO.LOW):
                print("PB 9 pressed")
                inputs_locked = True
                GPIO.output(LED_9, GPIO.HIGH)
                led_activated = LED_9
                button_pressed = "BTN09"
                continue
            elif(GPIO.input(PUSH_BUTTON_10) == GPIO.LOW):
                print("PB 10 pressed")
                inputs_locked = True
                GPIO.output(LED_10, GPIO.HIGH)
                led_activated = LED_10
                button_pressed = "BTN10"
                continue
            elif(GPIO.input(PUSH_BUTTON_11) == GPIO.LOW):
                print("PB 11 pressed")
                inputs_locked = True
                GPIO.output(LED_11, GPIO.HIGH)
                led_activated = LED_11
                button_pressed = "BTN11"
                continue
            elif(GPIO.input(PUSH_BUTTON_12) == GPIO.LOW):
                print("PB 12 pressed")
                inputs_locked = True
                GPIO.output(LED_12, GPIO.HIGH)
                led_activated = LED_12
                button_pressed = "BTN12"
                continue

            #call the webservice and pass button_pressed (BTN01-12)
            url = 'http://rsak.proxzerk.com/api_scoreboard/index.php/setteam/'+ button_pressed
            response = urllib2.urlopen(url).read()
        else:
            if(GPIO.input(MASTER_BUTTON) == GPIO.LOW):
                print("Master Button pressed")
                inputs_locked = False
                button_pressed = "resetteam"
            #call the webservice and pass button_pressed (ressetteam)
            url = 'http://rsak.proxzerk.com/api_scoreboard/index.php/resetteam/'
            response = urllib2.urlopen(url).read()
except KeyboardInterrupt:
    GPIO.cleanup()









