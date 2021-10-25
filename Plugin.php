<?php

/**
 * Plugin Name: CheckrInvitation
 **/

add_action( 'rest_api_init', function () { // when WP sets up the REST API
    register_rest_route( // tell it we want an endpoint
            'checkr/v1', '/invitation/', 
            [
                'methods' => 'GET', // that it handles GET requests
                'callback' => 'create_invitation_endpoint' // and calls this function when hit
            ]
    );
} );

function create_invitation_endpoint( ): object {
    $candidateId = $_GET['candidateId'];

    $response = wp_remote_post('https://api.checkr.com/v1/invitations', [
        'headers' => [
            'Authorization' => 'Basic ' . base64_encode('<Checkr_Secret_Key>' . ':' . ''),
        ],
        'body' => [
            'package' => 'driver_pro',
            'candidate_id' => $candidateId,
            'work_locations' =>  $worklocations,
        ],
    ]);

    if (is_wp_error($response)) {
        return $response;
    }

    return json_decode(wp_remote_retrieve_body($response), false);
}
