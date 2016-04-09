require 'test_helper'

class HomesiteControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get price" do
    get :price
    assert_response :success
  end

end
