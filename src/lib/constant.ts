import { itemProps } from "@/components/MessionItem";
import { Icon } from "lucide-react";
import { describe } from "node:test";
import { title } from "process";

export const ourMession:itemProps[] = [
    {
        icon: 'users',
        title: 'inclusive community',
        description: 'Embracing Diversity, Fostering Belonging At FitFusion Gym, we celebrate the beauty of diversity.'
    },
    {
        icon: 'graduation-cap',
        title: 'expert guidance',
        description: 'We understand that each person&apos;s fitness journey is unique.'
    }, {
        icon: 'sparkles',
        title: 'divers fitness oferings',
        description: 'At Fit, we believe in the power of diversity when it comes to fitness.'
    }, 
    {
        icon :'star',
        title: 'State-of-the-Art Facilitie',
        description: 'To support your fitness aspirations, we invest in state-of-the-art equipment and facilities.'
    },
    {
        icon: 'sun',
        title: 'Fun and motivation',
        description: 'We firmly believe that fitness should be enjoyable and motivational.'
    }, 
    {
        icon: 'swords',
        title: 'embracing challenges',
        description: 'Our mission involves challenging our members to push their boundaries, step outside their comfort zones'
    }
]