import RPi.GPIO as io
import time

io.setmode(io.BCM)
left_in1_pin = 4             #Left motor input A    
left_in2_pin = 17            #Left motor input B

right_in1_pin = 23           #Right motor input A                
right_in2_pin = 24           #Right motor input B   

GPIO.setmode(GPIO.BOARD)
GPIO.setup(5,GPIO.OUT)   #Left motor input A
GPIO.setup(7,GPIO.OUT)   #Left motor input B
GPIO.setup(11,GPIO.OUT)  #Right motor input A
GPIO.setup(13,GPIO.OUT)  #Right motor input B
GPIO.setwarnings(False)

while True:
print "Rotating both motors in clockwise direction"
GPIO.output(5,1)
GPIO.output(7,0)
GPIO.output(11,1)
GPIO.output(13,0)
time.sleep(1)     #One second delay

print "Rotating both motors in anticlockwise direction"
GPIO.output(5,0)
GPIO.output(7,1)
GPIO.output(11,0)
GPIO.output(13,1)
time.sleep(1)     
#One second delay