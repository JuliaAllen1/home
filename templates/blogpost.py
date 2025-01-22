from dominate.tags import *

title = a(input("Title: "), _class="post-title")
datetime = p(input("Date/Time: "), _class="date-time")

subtitle = p(input("Subtitle: "), _class="subtitle")

card = div(title, datetime, subtitle, _class="card-wrap")

print(card)