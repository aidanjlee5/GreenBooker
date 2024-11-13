"use client"
import React from "react";
import {ExploreFeatureCard} from "@/subframe/components/ExploreFeatureCard";
import { Dialog } from "@/subframe/components/Dialog";
//import {Button} from "@/subframe/components/Button";


function ItineraryCard(){
    const [itinerary, openItinerary] = React.useState(false)
    return(
      <div className="w-3/4">
        <ExploreFeatureCard 
            onClick = {() => openItinerary(true)}
            image="https://res.cloudinary.com/subframe/image/upload/v1711417508/shared/wd5ui3rofpbpbjdltzm2.png"
            title="Paris, France"
            desc="Travel plans involving immersing in the food culture and tourist attractions of France"
            metadata="Travel plans for Jan 2023 - Jan 2024"
        />
        <Dialog open={itinerary} onOpenChange={openItinerary}>
          <Dialog.Content>
            <div className="w-7/8 h-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet erat lorem, eget vulputate velit maximus a. Nam a sollicitudin odio. Proin varius, sem et feugiat viverra, tellus augue ultricies dolor, ut tristique velit tortor vel purus. Vivamus sollicitudin magna sem. Suspendisse sit amet consectetur magna. Phasellus nec mauris nunc. Suspendisse nulla orci, hendrerit quis est non, lacinia tristique lacus. Etiam velit ante, iaculis at efficitur quis, sodales ut lorem. Phasellus viverra leo vehicula nunc euismod mollis. Maecenas pulvinar enim luctus, imperdiet augue porttitor, venenatis erat. Mauris eu nulla ligula. Aenean sed tincidunt ex. Donec rhoncus libero at dui feugiat, ac blandit lorem semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce eu consectetur magna. Nam ac massa diam. Aliquam iaculis ipsum nibh, in tristique mauris accumsan eget. Aenean pretium vel turpis eu vehicula. Nullam accumsan libero a enim viverra mattis. Aliquam auctor eleifend tortor a consectetur. Proin eget scelerisque risus. Nam sit amet mauris ultricies, condimentum tortor id, rhoncus leo. Donec commodo arcu dapibus odio elementum, lobortis aliquam purus aliquet. Praesent sit amet vestibulum odio. Nunc iaculis rhoncus eros, ac mattis arcu cursus nec. Fusce at pharetra velit, ut ultricies arcu. Sed at aliquam diam. Etiam nec ligula ligula. Nullam ac lorem tempor, vestibulum ipsum eget, consectetur massa.

Proin enim nisi, pretium et justo in, cursus aliquam ligula. Nullam nec metus in dui dictum accumsan vitae quis ipsum. Ut quis odio ex. Ut viverra vitae tortor vitae viverra. Fusce in diam eu dolor imperdiet volutpat id eu mi. Fusce eget magna volutpat, elementum est in, lobortis erat. Mauris placerat mi est, eu volutpat mi egestas vel. Vivamus iaculis et turpis ac aliquam. Vivamus nec sollicitudin elit. Cras imperdiet urna nec lobortis tempor. Aenean vitae lorem et massa faucibus hendrerit eget in nulla. Quisque ut ultrices ante.

Nunc vitae ipsum non dolor sollicitudin pharetra a eu augue. Aliquam sem dui, consequat vel ipsum quis, mollis rutrum arcu. Cras ac nisi rhoncus, scelerisque ipsum non, iaculis leo. Praesent ut est interdum, elementum tellus a, laoreet felis. Sed pulvinar aliquam ligula vel dapibus. Quisque facilisis neque sit amet scelerisque ornare. Integer molestie arcu non augue rhoncus tincidunt. Sed lectus diam, viverra pharetra malesuada eu, congue in nisi. Vestibulum aliquet nisi vitae quam varius sagittis. Nulla suscipit metus pulvinar arcu consectetur consectetur. Suspendisse finibus arcu id mi tincidunt hendrerit.
            </div>
          </Dialog.Content>
        </Dialog>
      </div>
    );
}

export default ItineraryCard;